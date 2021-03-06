import React, { useEffect, useState } from 'react'
import Entries from '../components/Entries'
import { db } from '../services/firebase'
import styled from 'styled-components'
import swal from 'sweetalert'

export default function Diary() {
  const [entry, setEntry] = useState([])

  useEffect(() => {
    const diaryEntries = db.collection('diary').onSnapshot((snapshot) => {
      const allEntries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setEntry(allEntries)
    })
    return () => {
      diaryEntries()
    }
  }, [])

  return (
    <>
      <StyledMain>
        <HeadingStyled>Deine Tagebucheinträge</HeadingStyled>
        {entry
          .sort((entryB, entryA) => entryA.date.localeCompare(entryB.date))
          .map((entry) => (
            <Entries entry={entry} key={entry.id} onDeleteClick={deleteEntry} />
          ))}
      </StyledMain>
    </>
  )

  function deleteEntry(entry) {
    swal({
      title: 'Sicher?',
      text: 'Versuche nicht deine Vergangenheit zu löschen!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        db.collection('diary')
          .doc(entry.id)
          .delete()
          .then(
            swal(
              'Ok, dein Eintrag wurde hier gelöscht aber nicht in deinem Gedächtnis!',
              {
                icon: 'success',
              }
            )
          )
          .catch((error) => alert('Huch, da ist etwas schief gelaufen', error))
      } else {
        swal('Dein Eintrag bleibt!')
      }
    })
  }
}

const StyledMain = styled.main`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const HeadingStyled = styled.h1`
  font-size: 18px;
  margin-top: 12px;
`
