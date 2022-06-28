// Health status endpoint (GET)
const healthStatus = (req, res) => {
  res.json({ status: "UP" });
};
export default healthStatus;
