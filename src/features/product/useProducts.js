import { axiosInstance } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useProducts = () => {
 const { data, isLoading } = useQuery({
     queryFn: async () => {
       const productsResponse = await axiosInstance.get("/products")
 
       return productsResponse;
     },
 
   });

  return {
    data,
    isLoading,
  }
}