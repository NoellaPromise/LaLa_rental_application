import { supabase } from '@/lib/supabaseClient';

// Define the Property type
type Property = {
  id?: number;
  title: string;
  description: string;
  price_per_night: number;
  location: string;
  host_id: string;
};

// Create a new property
export const createProperty = async (property: Property) => {
  const { data, error } = await supabase
    .from('properties')
    .insert([property])
    .single();

  if (error) throw new Error(error.message);
  return data;
};

// Fetch all properties
export const fetchProperties = async () => {
  const { data, error } = await supabase
    .from('properties')
    .select('*');

  if (error) throw new Error(error.message);
  return data;
};

// Update a property
export const updateProperty = async (id: number, updates: Partial<Property>) => {
  const { data, error } = await supabase
    .from('properties')
    .update(updates)
    .eq('id', id)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

// Delete a property
export const deleteProperty = async (id: number) => {
  const { error } = await supabase
    .from('properties')
    .delete()
    .eq('id', id);

  if (error) throw new Error(error.message);
};