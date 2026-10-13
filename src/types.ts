import React from 'react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  stats?: string;
  consequence: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  quarter: string;
  iconName: string;
}

export interface WhyNowItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AssessmentStage {
  id: 'create' | 'deliver' | 'grade' | 'analyse';
  title: string;
  step: string;
  description: string;
  details: string[];
  mockupTitle: string;
  mockupContent: React.ReactNode;
}

export interface DemoRequest {
  fullName: string;
  email: string;
  schoolName: string;
  role: string;
  studentsCount: string;
  message?: string;
}
