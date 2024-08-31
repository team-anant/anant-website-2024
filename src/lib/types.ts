type TUsersForm = {
  name: string;
  batch: string;
  linkedIn: string;
  contactNo: string;
  imageUrl: string | null;
  email: string | null;
  subsystem: string | null;
  achievement: string | null;
  verified: boolean;
};

type TUsersFirestore = {
  id: string;
} & TUsersForm;
