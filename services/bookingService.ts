import { supabase } from '@/lib/supabaseClient';

type Booking = {
  id?: number;
  property_id: number;
  renter_id: string;
  check_in: string;
  check_out: string;
  status: 'pending' | 'confirmed' | 'canceled';
};

export const createBooking = async (booking: Booking) => {
  const { data, error } = await supabase
    .from('bookings')
    .insert([booking])
    .single();

  if (error) throw new Error(error.message);
  return data;
};

export const updateBookingStatus = async (id: number, status: Booking['status']): Promise<Booking | null> => {
    const { data, error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', id)
      .single();
    if (error) console.error('Error updating booking:', error.message);
    return data;
  };

export const fetchBookings = async () => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*');

  if (error) throw new Error(error.message);
  return data;
};

 export const isPropertyAvailable = async (propertyId: number, checkIn: string, checkOut: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('property_id', propertyId)
    .or(`check_in.lte.${checkOut},check_out.gte.${checkIn}`);
  if (error) console.error('Error checking availability:', error.message);
  return data?.length === 0;
};