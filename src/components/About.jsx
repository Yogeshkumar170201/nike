import axios from "axios"

const About = async () => {
try {
    const res = await axios.get("http://localhost:8082/hey");
    console.log(res);
} catch (error) {
    console.log(error);
}
  return (
    <div>hey</div>
  )
}

export default About