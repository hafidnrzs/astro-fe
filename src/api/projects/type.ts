import type { TResponse } from '@/entities/type';

export type TProjectItem = {
  id: number;
  slug: string;
  creator_id: number;
  project_name: string;
  budget: string;
  deadline: string;
  description: string;
  proposal: string;
  requirements: string;
  status: string;
  created_at: string;
  updated_at: string;
  creator: {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string | null;
    username: string;
    background: string;
    avatar: string;
    bio: string;
    website: string | null;
    socials: string[];
    location: string | null;
    timezone: string;
    language: string | null;
    currency: string | null;
    phone: string | null;
    cv: string;
    role: string;
    email: string;
    backup_email: string | null;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
  };
  applications: Array<{
    application_id: number;
    project_id: number;
    freelancer_id: number;
    status: string;
    applied_at: string;
    created_at: string;
    updated_at: string;
  }>;
  investments: Array<{
    investment_id: number;
    investor_id: number;
    project_id: number;
    amount: string;
    invested_at: string;
  }>;
  milestones: Array<unknown>;
  pitch_decks: Array<unknown>;
};

export type TProjectResponse = TResponse<TProjectItem>;

export type TProjectCreateRequest = {
  project_name: string;
  budget: string;
  deadline: string;
  description: string;
  proposal: File;
  requirements: File;
};
