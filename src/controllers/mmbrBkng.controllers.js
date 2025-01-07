import MembershipBookingsServices from "../services/mmberBking.services.js";


// Create a new booking
export const createBookingHandler = async (req, res) => {
    try {
        const bookingData = req.body; // Validate input before passing
        const newBooking = await MembershipBookingsServices.createBooking(bookingData);
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all bookings
export const getAllBookingsHandler = async (req, res) => {
    try {
        const bookings = await MembershipBookingsServices.getAllBookings();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get booking by ID
export const getBookingByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await MembershipBookingsServices.getBookingById(id);
        res.status(200).json(booking);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Update a booking by ID
export const updateBookingHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBooking = await MembershipBookingsServices.updateBooking(id, req.body);
        res.status(200).json(updatedBooking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a booking by ID
export const deleteBookingHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await MembershipBookingsServices.deleteBooking(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
