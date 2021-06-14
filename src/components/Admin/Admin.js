import { motion } from 'framer-motion';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from './Post/Create';

const Admin = () => (
  <motion.div>
    <Switch>
      <Route path="/admin/create" component={Create} />
    </Switch>
  </motion.div>
);

export default Admin;
