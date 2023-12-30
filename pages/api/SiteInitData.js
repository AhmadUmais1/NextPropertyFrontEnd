

export default function Request(req, res) {
  try {
    res.status(200).json(propertyData);
  } catch (err) {
    console.log(err.message);
    alert("Data is not fetch!!! Please check console!!!");
  }
}
