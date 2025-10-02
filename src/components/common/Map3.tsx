"use client";

import React from "react";

export default function Map3() {
    return (
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.1234567890!2d-82.4589!3d27.9286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c7c8c8c8c8c8%3A0x1234567890abcdef!2s400%20N%20Tampa%20St%2C%20Tampa%2C%20FL%2033602!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ramona Arias Realtor Office Location"
            />
        </div>
    );
}
