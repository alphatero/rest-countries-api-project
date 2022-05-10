/* eslint-disable @typescript-eslint/no-shadow */
import clsx from "clsx";
import { Card, Icon, ClickAway } from "components";
import { useCallback, useState } from "react";
import {
  FakeLabelProps,
  FakeOptionProps,
  FakeSelectProps,
  SelectProps,
  Option,
} from "types";
import { not, identity } from "ramda";

function FakeLabel({ className, value, label, onClick }: FakeLabelProps) {
  return (
    <button
      type="button"
      className={clsx("flex justify-between items-center flex-1", className)}
      onClick={onClick}
    >
      <span className="pl-4">{value || label}</span>
      <span className="w-4 m-4">
        <Icon.ChevronDown />
      </span>
    </button>
  );
}

function FakeOption({ className, label, onClick }: FakeOptionProps) {
  return (
    <button
      className={clsx(
        "flex w-full p-4",
        "hover:bg-gray-dark hover:text-white",
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function FakeSelect({
  classes,
  label,
  value,
  options,
  onSelect,
}: FakeSelectProps) {
  const [isExpand, setExpand] = useState(false);

  return (
    <ClickAway onClickAway={() => setExpand(false)}>
      <div className={clsx("inline-flex flex-col relative", classes?.wrapper)}>
        <Card>
          <FakeLabel
            className={classes?.label}
            label={label}
            value={value}
            onClick={() => setExpand(not)} //not is equal to !current;
          />
        </Card>

        {isExpand && (
          <Card>
            <ul
              className={clsx(
                "flex flex-col w-full bg-white",
                "absolute top-full mt-1 z-10"
              )}
            >
              {options.map(({ label, value }) => (
                <li key={value}>
                  <FakeOption
                    className={classes?.option}
                    label={label}
                    onClick={() => {
                      onSelect({ label, value });
                      setExpand(false);
                    }}
                  />
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </ClickAway>
  );
}

export function Select({ classes, placeholder, options }: SelectProps) {
  const [current, setCurrent] = useState(placeholder ? -1 : 0);

  const onSelect = useCallback(
    ({ value }: Option) =>
      setCurrent(options.findIndex((option) => option.value === value)),
    [options]
  );
  return (
    <>
      <select
        name="filter"
        aria-label="Filter"
        className="sr-only"
        ref={(ref) => {
          if (!ref) return;

          ref.dispatchEvent(new Event("change", { bubbles: true }));
        }}
        value={options[current]?.value}
        onChange={identity}
      >
        {placeholder && <option value="-1">{placeholder}</option>}

        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <FakeSelect
        classes={classes}
        label={placeholder}
        value={options[current]?.value}
        options={options}
        onSelect={onSelect}
      />
    </>
  );
}
