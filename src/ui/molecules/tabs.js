import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsWrapper = styled.ul`
  display: flex;
  justify-content: ${({ stretched }) =>
    stretched ? 'space-around' : 'flex-start'};
  user-select: none;
`;

const TabWrapper = styled.li`
  color: ${({ filled, isActive, currentValueColor }) =>
    determineColor(filled, isActive, currentValueColor)};

  padding: 0 15px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: none;
    padding-right: 0;
  }

  display: flex;
  flex-grow: ${({ stretched }) => (stretched ? 1 : 0)};
  align-items: center;
  justify-content: center;

  & button {
    font-style: normal;
    font-size: 15px;
    color: currentColor;
    background: none;
    border: none;
    border-bottom: 1px solid
      ${({ filled, isActive, currentValueColor }) =>
        determineColor(filled, isActive, currentValueColor)};
    cursor: pointer;
  }

  cursor: pointer;

  &:after {
    content: '';
    display: none;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    span {
      color: ${({ theme }) => theme.colors.red};
      opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    }
  }
`;

const Tab = React.forwardRef(
  (
    {
      currentValue,
      currentValueColor,
      label,
      filled,
      value,
      onChange,
      stretched,
    },
    ref,
  ) => {
    const isActive = currentValue === value;
    const handleTabClick = event => onChange(value, event);

    return (
      <TabWrapper
        onClick={!isActive ? handleTabClick : undefined}
        isActive={isActive}
        filled={filled}
        currentValueColor={currentValueColor}
        stretched={stretched}
        ref={ref}
      >
        <button type="button" tabIndex={0}>
          {label}
        </button>
      </TabWrapper>
    );
  },
);

Tab.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  currentValueColor: PropTypes.string.isRequired,
  filled: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  stretched: PropTypes.bool,
};

Tab.defaultProps = {
  filled: false,
  stretched: false,
};

export function Tabs({
  tabs,
  currentValue,
  currentValueColor,
  onChange,
  stretched,
}) {
  return (
    <TabsWrapper stretched={stretched}>
      {tabs.map(({ value, ...tab }, index) => (
        <Tab
          key={value || index}
          currentValue={currentValue}
          currentValueColor={currentValueColor}
          onChange={onChange}
          value={value || index}
          stretched={stretched}
          {...tab}
        />
      ))}
    </TabsWrapper>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.func,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  currentValueColor: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  stretched: PropTypes.bool,
};

Tabs.defaultProps = {
  stretched: false,
  currentValueColor: '#333',
};

function determineColor(filled, active, currentValueColor) {
  if (filled) return '#f25f5c';
  if (active) return currentValueColor;
  return '#333';
}
