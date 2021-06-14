import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { motion } from 'framer-motion';
import Content from '../../components/Content/Content';

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Content />
  </motion.div>
);

export default Home;
