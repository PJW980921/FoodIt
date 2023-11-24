import { useRef } from "react";

export default function FileInput({ name, value, onChange }) {
  const inputRef = useRef();
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  return <input type="file" onChange={handleChange}  ref={inputRef}/>;
}
