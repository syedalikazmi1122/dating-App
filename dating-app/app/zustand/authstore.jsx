import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  profile: null,

  login: () => set({ isAuthenticated: true }),
  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
      token: null,
      profile: null,
    }),

  setAuthState: ({ token, user, profile }) =>
    set({
      isAuthenticated: true,
      token,
      user,
      profile,
    }),

  // Dummy Google/Apple login handlers (replace with real logic later)
  signInWithGoogle: async () => {
    // simulate login
    const mockUser = {
      name: "Google User",
      email: "google@example.com",
      profileCompleted: false,
    };
    const mockToken = "google-token";
    const mockProfile = { displayName: "GoogleUser" };

    set({
      isAuthenticated: true,
      user: mockUser,
      token: mockToken,
      profile: mockProfile,
    });
  },

  signInWithApple: async () => {
    // simulate login
    const mockUser = {
      name: "Apple User",
      email: "apple@example.com",
      profileCompleted: false,
    };
    const mockToken = "apple-token";
    const mockProfile = { displayName: "AppleUser" };

    set({
      isAuthenticated: true,
      user: mockUser,
      token: mockToken,
      profile: mockProfile,
    });
  },
}));

export default useAuthStore;
