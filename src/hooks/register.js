import axios from "axios";

const register = async (data) => {
  const form = new FormData();
  Object.keys(data).forEach((field) => {
    form.append(field, data[field]);
  });

  console.log(data)
  // Display the values
for (const value of form.values()) {
   console.log(value);
 }
  if (data == null) {
    return;
  }
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/user/register",
      form
    );
    //console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { register };
