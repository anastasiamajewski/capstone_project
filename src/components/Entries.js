import PropTypes from 'prop-types'
import React from 'react'
import { useToggle } from 'react-hooks-lib'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

import styled from 'styled-components/macro'

Entries.propTypes = {
  topic: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  on: PropTypes.bool,
  toggleBookmark: PropTypes.func,
}

export default function Entries({ entry, onDeleteClick }) {
  const { on, toggle } = useToggle(false)

  return (
    <>
      <label key={entry.id}>
        {on || (
          <EntriesStyled>
            <HeadingStyled>
              <div className="circle">{entry.rating}</div>

              <p> {entry.date}</p>

              <BsChevronDown
                size={30}
                onClick={toggle}
                className="arrow-icon"
              />
            </HeadingStyled>
          </EntriesStyled>
        )}
        {on && (
          <EntriesOpenStyled>
            <HeadingOpenStyled>
              <div className="circle">{entry.rating}</div>
              <p> {entry.date}</p>

              <BsChevronUp size={30} onClick={toggle} className="arrow-icon" />
            </HeadingOpenStyled>

            <div>
              <p>{entry.text}</p>
            </div>

            <IconsFooterStyled>
              <RiDeleteBin5Line
                size={30}
                onClick={() => onDeleteClick(entry)}
              />
            </IconsFooterStyled>
          </EntriesOpenStyled>
        )}
      </label>
    </>
  )
}

const EntriesStyled = styled.div`
  border: solid var(--secondary) 2px;
  border-radius: 24px;
  background: var(--primary);
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: auto;
  font-size: 18px;
  line-height: 1.2;
  margin-top: 8px;
  margin-bottom: 2px;
  padding: 12px;

  .arrow-icon {
    color: var(--secondary);
  }

  .circle {
    color: var(--primary);
    background-color: var(--secondary);
    border: solid var(--quaternary) 2px;
    font-weight: normal;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 50px;
    align-items: center;
    font-size: 18px;
    text-align: center;
    z-index: 999;
  }
`

const EntriesOpenStyled = styled.div`
  border: solid var(--secondary) 2px;
  border-radius: 24px;
  background: var(--primary);
  color: var(--secondary);
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: auto;
  font-size: 18px;
  line-height: 1.2;
  margin-top: 8px;
  margin-bottom: 2px;
  padding: 12px;

  .arrow-icon {
    color: var(--secondary);
  }
  .circle {
    color: var(--primary);
    background-color: var(--secondary);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 35px;
    align-items: center;
    font-size: 18px;
    text-align: center;

    z-index: 999;
  }
`

const HeadingStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  color: var(--secondary);
  font-weight: bold;
`

const HeadingOpenStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-bottom: 12px;
  color: var(--secondary);
  font-weight: bold;
`
const IconsFooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
  margin-top: 12px;
  color: var(--secondary);
`
