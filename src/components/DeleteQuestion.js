import swal from 'sweetalert'

function deleteQuestion({ newquestion }) {
  swal({
    title: 'Sicher?',
    text: 'Versuche nicht deine Vergangenheit zu löschen!',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      db.collection('userquestions')
        .doc(newquestion.id)
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
