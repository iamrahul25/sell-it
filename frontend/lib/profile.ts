export type ProfileData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  about: string;
};

export const initialProfile: ProfileData = {
  name: "Rahul Kumar",
  email: "rahul@example.com",
  phone: "+91 98765 43210",
  location: "Delhi, India",
  about:
    "I enjoy buying and selling useful items and giving unused products a second life.",
};
