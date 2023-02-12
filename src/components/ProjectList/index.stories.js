import React from 'react';
import { ProjectList } from '.';

export default {
  component: ProjectList,
  title: 'Project List'
};

export function Template(args) {
  return <ProjectList {...args} />;
}
