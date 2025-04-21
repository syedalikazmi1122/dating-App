const User = require('../models/User');
const Profile = require('../models/Profile');

exports.viewAllUsers = async (req, res) => {
    try {
        const users = await User.find()
            .select('-password')
            .populate('profile')
            .sort({ createdAt: -1 });
        
        res.json({ success: true, users });
    } catch (error) {
        console.error('Error viewing users:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch users' });
    }
};

exports.viewSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .select('-password')
            .populate('profile');
        
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        
        res.json({ success: true, user });
    } catch (error) {
        console.error('Error viewing user:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch user' });
    }
};

exports.approveUserAccount = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        
        user.isApproved = true;
        await user.save();
        
        res.json({ success: true, message: 'User account approved successfully' });
    } catch (error) {
        console.error('Error approving user:', error);
        res.status(500).json({ success: false, error: 'Failed to approve user' });
    }
}; 