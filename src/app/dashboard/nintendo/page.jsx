"use client"

import { Box, Heading } from "@chakra-ui/layout";
import Dashboard        from '@/components/user.dashboard';
import Loading               from '@/components/Loading'
import {useEffect, useState} from 'react';
import PublicLayout from '@/components/PublicLayout';

/**
 * External Dependencies.
 */



export default  function dashboard(){

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);
  const breadcrumbsData = [
    {
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      label: 'Nintendo',
      path: '/dashboard/nintendo/',
    },
  ];

    // const {  user, loading} = useAuth();
    return(
      <PublicLayout breadcrumbTitle={'Nintendo'} breadcrumb={breadcrumbsData}>
        {loading ? <Loading /> :  (
          <Box>
            <Heading as="h1" size="lg" mb={4}>
              Nintendo Dashboard
            </Heading>
          </Box>
        )}
      </PublicLayout>
  )
}
