import axios, { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  language : string
}

export interface CreateFAQ {
  question: string;
  answer: string;
}

export interface UpdateFAQ {
  question?: string;
  answer?: string;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, 
});

export const fetchFAQs = async (queryParams?: Record<string, string>): Promise<FAQ[]> => {
  try {
    const response: AxiosResponse<FAQ[]> = await api.get('/api/faqs', {
      params: queryParams, 
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error;
  }
};

// Create a new FAQ
export const createFAQ = async (newFAQ: CreateFAQ): Promise<FAQ> => {
  try {
    const response: AxiosResponse<FAQ> = await api.post('/api/faqs', newFAQ);
    return response.data; 
  } catch (error) {
    console.error('Error creating FAQ:', error);
    toast.error("Error creating FAQ:")
    throw error;
  }
};

// Edit an existing FAQ
export const editFAQ = async (faqId: string, updatedFAQ: UpdateFAQ): Promise<FAQ> => {
  try {
    const response: AxiosResponse<FAQ> = await api.put(`/api/faqs`,updatedFAQ,{
      params:{
        id:faqId
      }, 
    });
    return response.data; 
  } catch (error) {
    console.error('Error editing FAQ:', error);
    throw error;
  }
};

// Delete an FAQ
export const deleteFAQ = async (faqId: string): Promise<void> => {
  try {
    await api.delete(`/api/faqs`,{
      params:{
        id:faqId
      }, 
    });
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    throw error;
  }
};
