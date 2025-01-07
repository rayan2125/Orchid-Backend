import MembershipBookings from "../models/mmbrBking.models.js";


class MembershipBookingsServices {
    // Create a new booking
    static async createBooking(data) {
        try {
            const booking = await MembershipBookings.create(data);
            return booking;
        } catch (error) {
            throw new Error(`Error creating booking: ${error.message}`);
        }
    }

    // Get all bookings
    static async getAllBookings() {
        try {
            const bookings = await MembershipBookings.findAll();
            return bookings;
        } catch (error) {
            throw new Error(`Error fetching bookings: ${error.message}`);
        }
    }

    // Get a booking by ID
    static async getBookingById(bookingId) {
        try {
            const booking = await MembershipBookings.findByPk(bookingId);
            if (!booking) {
                throw new Error("Booking not found");
            }
            return booking;
        } catch (error) {
            throw new Error(`Error fetching booking: ${error.message}`);
        }
    }

    // Update a booking by ID
    static async updateBooking(bookingId, data) {
        try {
            const booking = await MembershipBookings.findByPk(bookingId);
            if (!booking) {
                throw new Error("Booking not found");
            }
            await booking.update(data);
            return booking;
        } catch (error) {
            throw new Error(`Error updating booking: ${error.message}`);
        }
    }

    // Delete a booking by ID
    static async deleteBooking(bookingId) {
        try {
            const booking = await MembershipBookings.findByPk(bookingId);
            if (!booking) {
                throw new Error("Booking not found");
            }
            await booking.destroy();
            return { message: "Booking deleted successfully" };
        } catch (error) {
            throw new Error(`Error deleting booking: ${error.message}`);
        }
    }
}

export default MembershipBookingsServices;
