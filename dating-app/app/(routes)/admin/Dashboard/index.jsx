import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const DashboardScreen = () => {
  // Sample data
  const lineChartData = [
    { month: 'Jan', value: 54.97 },
    { month: 'Feb', value: 34.53 },
    { month: 'Mar', value: 41.34 },
    { month: 'Apr', value: 59.97 },
    { month: 'May', value: 13.63 },
    { month: 'Jun', value: 34.53 },
    { month: 'Jul', value: 60.42 },
    { month: 'Aug', value: 39.53 },
    { month: 'Sep', value: 54.52 },
    { month: 'Oct', value: 38.62 },
    { month: 'Nov', value: 52.70 },
    { month: 'Dec', value: 24.53 }
  ];

  const metrics = [
    { title: 'Total Sales', value: '40,689', subtitle: '+14.5% from previous' },
    { title: 'Active Users', value: '500', subtitle: '+8.2% from last week' },
    { title: 'Active Paid Users', value: '400', subtitle: '+5.3% from last month' },
    { title: 'Total Pending', value: '2040', subtitle: '+14.5% from previous' },
  ];

  const CustomLineChart = () => {
    const maxValue = Math.max(...lineChartData.map(item => item.value));
    const points = lineChartData.map((item, index) => ({
      x: (width - 80) * (index / (lineChartData.length - 1)) + 40,
      y: 200 - (item.value / maxValue) * 150
    }));

    const path = points.reduce((acc, point, index) => {
      if (index === 0) return `M ${point.x} ${point.y}`;
      return `${acc} L ${point.x} ${point.y}`;
    }, '');

    return (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Earning Overview</Text>
        <View style={styles.chartWrapper}>
          {/* Y-axis labels */}
          <View style={styles.yAxis}>
            {[100, 80, 60, 40, 20, 0].map((value) => (
              <Text key={value} style={styles.axisLabel}>{value}%</Text>
            ))}
          </View>
          
          <View style={styles.chartArea}>
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((index) => (
              <View key={index} style={styles.gridLine} />
            ))}
            
            {/* SVG Line Chart */}
            <View style={styles.svgWrapper}>
              <View style={[StyleSheet.absoluteFill, styles.gradientBackground]} />
              {points.map((point, index) => (
                <View
                  key={index}
                  style={[
                    styles.dataPoint,
                    {
                      left: point.x - 4,
                      top: point.y - 4,
                    },
                  ]}
                />
              ))}
            </View>
          </View>
        </View>
        
        {/* X-axis labels */}
        <View style={styles.xAxis}>
          {lineChartData.map((item, index) => (
            <Text key={index} style={styles.axisLabel}>{item.month}</Text>
          ))}
        </View>
      </View>
    );
  };

  const CustomBarChart = () => {
    const maxValue = Math.max(...lineChartData.map(item => item.value));
    
    return (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Monthly Progress</Text>
        <View style={styles.barChartContainer}>
          {lineChartData.map((item, index) => (
            <View key={index} style={styles.barWrapper}>
              <View style={styles.barBackground}>
                <Animated.View
                  style={[
                    styles.bar,
                    {
                      height: `${(item.value / maxValue) * 100}%`,
                      backgroundColor: item.month === 'Jul' ? '#76CABB' : '#FF5862',
                    },
                  ]}
                />
              </View>
              <Text style={styles.barLabel}>{item.month}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Dashboard</Text>
      </View>

      <View style={styles.metricsContainer}>
        {metrics.map((metric, index) => (
          <View key={index} style={styles.metricCard}>
            <Text style={styles.metricValue}>{metric.value}</Text>
            <Text style={styles.metricTitle}>{metric.title}</Text>
            <Text style={styles.metricSubtitle}>{metric.subtitle}</Text>
          </View>
        ))}
      </View>

      <CustomLineChart />
      <CustomBarChart />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 20,
    color: '#FF5862',
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  metricCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  metricTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  metricSubtitle: {
    fontSize: 12,
    color: '#FF5862',
  },
  chartContainer: {
    padding: 20,
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  chartWrapper: {
    flexDirection: 'row',
    height: 220,
    alignItems: 'center',
  },
  yAxis: {
    width: 40,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  chartArea: {
    flex: 1,
    height: '100%',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
  },
  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#EAEAEA',
  },
  svgWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  gradientBackground: {
    backgroundColor: 'rgba(255, 88, 98, 0.1)',
  },
  dataPoint: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF5862',
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginTop: 10,
  },
  axisLabel: {
    fontSize: 10,
    color: '#C8CACD',
  },
  barChartContainer: {
    flexDirection: 'row',
    height: 220,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  barWrapper: {
    alignItems: 'center',
    width: 24,
  },
  barBackground: {
    width: 7,
    height: 180,
    backgroundColor: '#F3F3F7',
    borderRadius: 1,
    overflow: 'hidden',
  },
  bar: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 1,
  },
  barLabel: {
    marginTop: 5,
    fontSize: 10,
    color: '#C8CACD',
  },
});

export default DashboardScreen;