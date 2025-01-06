import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';



const MembershipBookings = sequelize.define("ov_membership_bookings", {
    booking_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, // Assuming this is auto-increment
    },
    membership_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    members_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    checkin_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    checkout_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    guest_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    adult_guest_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    children_guest_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nights_booking: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_rooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    room_category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount_paid_ov: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    booking_type: {
        type: DataTypes.ENUM('domestic', 'international'),
        allowNull: false,
    },
    booking_location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    booking_hotel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    guest_visited: {
        type: DataTypes.ENUM('yes', 'no'),
        allowNull: false,
    },
    booking_voucher: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nights_utilised_under: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    additional_amt_paid: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    payment_purpose: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    payment_status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nights_debited_details: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reason_not_giving: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    booking_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    booking_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    voucher_details: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}
 );

export default MembershipBookings;
