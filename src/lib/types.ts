type TUsersForm = {
  name: string;
  batch: string;
  imageUrl: string | null;
  contactNo: string;
  email: string | null;
  subsystem: string | null;
  achievement: string | null;
  verified: boolean;
};

type TUsersFirestore = {
  id: string;
  name: string;
  batch: string;
  imageUrl: string | null;
  contactNo: string;
  email: string | null;
  subsystem: string;
  achievement: string;
  verified: boolean;
};
