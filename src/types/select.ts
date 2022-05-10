export type FakeLabelProps = {
  className?: string;
  value?: string;
  label?: string;
  onClick: () => void;
};

export type FakeOptionProps = {
  className?: string;
  label?: string;
  onClick: () => void;
};

export interface Option {
  value: string;
  label: string;
}

export type FakeSelectProps = {
  classes?: {
    wrapper?: string;
    label?: string;
    option?: string;
  };
  label?: string;
  value: string;
  options: Option[];
  onSelect: (option: Option) => void;
};

export type SelectProps = {
  classes?: {
    wrapper?: string;
    label?: string;
    options?: string;
  };
  placeholder?: string;
  options: Option[];
};
