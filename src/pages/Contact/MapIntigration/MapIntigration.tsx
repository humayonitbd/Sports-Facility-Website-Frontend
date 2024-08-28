

const MapIntegration = () => {
  return (
    <div style={{ padding: "5px 2px", background: "#F2F7FF" }}>
      <div style={{ height: "400px", boxShadow: "50px" }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4115322651036!2d-122.41941808468129!3d37.77492927975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a5dc5e229%3A0x70e7b62495c062!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1632963453721!5m2!1sen!2sus"
          style={{ border: 0, width: "100%", height: "100%" }}
          // allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapIntegration;
