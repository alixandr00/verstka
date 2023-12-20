import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { options, options2, options3 } from "../../constants/constants";

export const Select = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleDropdownChange = (value, dropdownName) => {
    if (dropdownOpen !== dropdownName) {
      setDropdownOpen(dropdownName);
    }
    switch (dropdownName) {
      case "plan":
        setSelectedPlan(value);
        break;
      case "style":
        setSelectedStyle(value);
        break;
      case "color":
        setSelectedColor(value);
        break;
      default:
        break;
    }
  };

  const handleApplyClick = () => {
    setDropdownOpen(null);
  };
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".ui.dropdown")) {
      setDropdownOpen(null);
    }
  };

  document.addEventListener("click", handleOutsideClick);

  return (
    <div className="flex gap-12 pl-[5.65%] pt-12 ">
      <div className="flex gap-[1rem] ">
        <Dropdown
          options={options}
          className="w-[12.9rem] h-[3.6rem] bg-[#002B45] text-[white] py-4 pl-[3rem] mb-4"
          text="ПЛАНИРОВКА"
          value={selectedPlan}
          onChange={(e, { value }) => handleDropdownChange(value, "plan")}
          open={dropdownOpen === "plan"}
          onOpen={() => setDropdownOpen("plan")}
          onClose={() => setDropdownOpen(null)}
          closeOnBlur={false}
        >
          <Dropdown.Menu
            style={{ marginTop: "1rem", width: "12.9rem" }}
            multiple={false}
          >
            {options.map((option) => (
              <Dropdown.Item
                key={option.key}
                onClick={(e) => e.stopPropagation()}
              >
                <input type="checkbox" id={option.key} />
                <label
                  className="cursor-pointer   "
                  style={{ marginLeft: "0.5rem" }}
                  htmlFor={option.key}
                >
                  {option.text}
                </label>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown
          options={options}
          className="w-[12.9rem] h-[3.6rem] py-4 pl-[2.8rem] mb-4 border-[1px] border-[#002B45]"
          text="СТИЛЬ КУХНИ"
          value={selectedStyle}
          onChange={(e, { value }) => handleDropdownChange(value, "style")}
          open={dropdownOpen === "style"}
          onOpen={() => setDropdownOpen("style")}
          onClose={() => setDropdownOpen(null)}
          closeOnBlur={false}
        >
          <Dropdown.Menu style={{ marginTop: "1rem", width: "12.9rem" }}>
            {options2.map((option2) => (
              <Dropdown.Item
                key={option2.key}
                onClick={(e) => e.stopPropagation()}
              >
                <input type="checkbox" id={option2.key} />
                <label
                  className="cursor-pointer"
                  style={{ marginLeft: "0.5rem" }}
                  htmlFor={option2.key}
                >
                  {option2.text}
                </label>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown
          options={options3}
          className="w-[8.5rem] h-[3.6rem] border-[1px] border-[#002B45] py-4 pl-[2.5rem] mb-4"
          text="ЦВЕТ"
          value={selectedColor}
          onChange={(e, { value }) => handleDropdownChange(value, "color")}
          open={dropdownOpen === "color"}
          onOpen={() => setDropdownOpen("color")}
          onClose={() => setDropdownOpen(null)}
          closeOnBlur={false}
        >
          <Dropdown.Menu style={{ marginTop: "1rem", width: "8.5rem" }}>
            {options3.map((option) => (
              <Dropdown.Item
                key={option.key}
                onClick={(e) => e.stopPropagation()}
              >
                <input type="checkbox" id={option.key} />
                <label
                  className="cursor-pointer"
                  style={{ marginLeft: "0.5rem" }}
                  htmlFor={option.key}
                >
                  {option.text}
                </label>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="flex gap-4 relative">
        <button
          className="bg-[#E1E1E1] w-[10.3rem] h-[3.6rem] hover:bg-[#b6b6b6] active:bg-[#828282]"
          onClick={handleApplyClick}
        >
          Применить
        </button>
        <button
          className=" h-[3.6rem] w-[9.25rem] border-[1px] border-[#000000] hover:text-[red] hover:border-[red]"
          onClick={handleApplyClick}
        >
          Сбросить
        </button>
      </div>
    </div>
  );
};
