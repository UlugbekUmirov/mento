import Select from "react-select";
import { useTranslation } from "react-i18next";

const defaultOptions = {
  isMulti: true,
  isSearchable: false,
  styles: {
    control: (styles) => ({
      ...styles,
      border: "none",
    }),
    menu: (styles) => ({ ...styles, borderRadius: "12px" }),
    option: (styles) => ({
      ...styles,
      height: "60px",
      fontWeight: "700",
      fontSize: "18px",
      "&:hover": {
        color: "white",
        cursor: "pointer",
        background: "rgb(87, 98, 247)",
      },
    }),
    clearIndicator: (styles) => ({
      ...styles,
      borderRadius: "50%",
      backgroundColor:"red",
      padding:'0px',
      color:"white",
      "&:hover": {
        color: "white",
        cursor: "pointer",
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "rgb(128, 128, 128)",
      fontSize: "16px",      
      fontWeight: "600",
    }),
    dropdownIndicator:(styles)=>({
     ...styles,
     background:'#5762f7',
     padding:"0",
     borderRadius:"50%",
     color:'white'
    }),
    multiValueRemove:(styles)=>({
    ...styles,
      backgroundColor:"red",  
      borderRadius:'50%',
      padding:'0px',
      width:'20px!important',
      height:'20px!important',
      color:"white",
      marginTop:'5px',
      "&:hover": {
        color: "white",
        cursor: "pointer",
        backgroundColor:"red"
      },
    })
  },
};
export default function ReactSelect({ options, value, onChange }) {
  const { t } = useTranslation("translation", { keyPrefix: "Pricing" });
  return (
    <div>
      <Select
        {...defaultOptions}
        isMulti
        options={options}
        placeholder={<div>{t("placeholder")}</div>}
        className="basic-multi-select"
        classNamePrefix="select"
        defaultValue={value}
        onChange={onChange}
        theme={(theme) => ({
          ...theme,

          colors: {
            ...theme.colors,
            primary25: "white",
            primary: "white",
          },
        })}
      />
    </div>
  );
}
