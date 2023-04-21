export const customStyles = {
  option: (defaultStyles: any, state: { isSelected: any }) => ({
    ...defaultStyles,
    color: state.isSelected ? "#212529" : "#fff",
    backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
  }),

  control: (defaultStyles: any, state: { isFocused: any }) => ({
    ...defaultStyles,
    backgroundColor: "#212529",
    width: "20rem",
    border: state.isFocused ? "white" : "#212529",
    boxshadow: "none",
    color: "white",
  }),
  singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "white" }),

  indicatorSeparator: (defaultStyles: any) => ({
    ...defaultStyles,
    display: "none",
  }),

  input: (defaultStyles: any) => ({
    ...defaultStyles,
    color: "white",
  }),
};

export const options = [
  { label: "captain", value: "captain" },
  { label: "spiderman", value: "spiderman" },
  { label: "antman", value: "antman" },
];
