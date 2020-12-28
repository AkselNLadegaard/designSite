import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
const Container = styled.div`
  max-width: 60ch;
  align-self: center;
  justify-self: center;
  margin: 0 auto;
`

const Article = () => {
  return (
    <Container>
      <h1>Excellent times, an exciting heading</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id metus
        nisi. Aliquam vel scelerisque ipsum, vel rutrum purus. Maecenas aliquam
        tellus nec tortor sodales facilisis. Nam aliquet volutpat elit eget
        ultricies. Sed felis enim, iaculis eget nulla eu, fermentum mattis
        libero. Nullam urna lacus, iaculis at dui nec, malesuada interdum est.
        Sed posuere id velit ut volutpat. Phasellus a hendrerit leo. Vivamus
        maximus tempor magna, quis auctor est gravida vitae. Praesent faucibus
        magna accumsan pellentesque cursus. Nulla sed dignissim nisl, ut commodo
        augue. Aenean malesuada, nulla sit amet placerat congue, lectus risus
        cursus dui, rhoncus varius quam orci et augue. Praesent id leo eget
        mauris sodales vestibulum feugiat ut dui. Sed nec ante volutpat sapien
        porta consequat. Maecenas in diam libero. Phasellus pulvinar ipsum vel
        risus luctus, vitae elementum orci fringilla. Mauris malesuada, purus
        quis semper viverra, nulla purus convallis ligula, sed ullamcorper
        mauris magna ac tortor. Aenean finibus magna quis velit porttitor
        vehicula. Praesent malesuada hendrerit metus eget vehicula. Cras et eros
        quis nibh molestie semper ut sed elit. Integer efficitur nisl eros,
        imperdiet elementum enim tempor at. Morbi libero nunc, fringilla quis
        ante id, cursus ultrices eros. Vivamus sed fringilla mi, at luctus enim.
        Nunc ut mattis nunc. In tincidunt congue pulvinar. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Vivamus aliquet lectus vitae
        metus elementum, a suscipit nulla commodo. Sed dapibus laoreet libero,
        in ultrices est interdum a. Ut volutpat magna quis porttitor lobortis.
        Phasellus quis magna dignissim, porta massa ac, cursus nulla. Aliquam
        eget sem non dolor imperdiet luctus vel in metus. Curabitur orci risus,
        egestas eget tortor id, elementum posuere tellus. Nullam ornare nisl
        eget mi egestas bibendum. Aenean et eros elit. Suspendisse tempus
        ultrices aliquet. Vivamus ac vehicula risus. Mauris risus ligula, mollis
        ut feugiat ac, tempus id dui. Curabitur pulvinar interdum diam ac
        dapibus. Etiam sed metus sed ante iaculis imperdiet. Morbi luctus
        dapibus dictum. Mauris tempor tempor neque sed pellentesque. Vivamus
        ipsum est, sodales vitae lectus non, bibendum malesuada quam. Nullam sit
        amet dolor vehicula, rutrum velit non, ullamcorper velit. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Donec tellus leo, lacinia in facilisis vel, efficitur id quam.
        Phasellus nec justo tincidunt turpis bibendum varius at quis justo. Sed
        nec pellentesque enim. Donec tincidunt, sapien sit amet pharetra
        vestibulum, lorem diam accumsan erat, nec convallis erat eros et lectus.
        Nunc iaculis, leo eget pellentesque pharetra, odio urna tincidunt nisl,
        sit amet venenatis lacus dolor vulputate libero. Quisque feugiat varius
        dolor et cursus. Nunc ipsum enim, mattis id elit eu, pulvinar feugiat
        ligula. Maecenas iaculis a tellus at pharetra. Aenean in velit iaculis,
        egestas felis quis, suscipit nibh. Aenean molestie sem ligula, id tempus
        sapien auctor vulputate.
      </p>
    </Container>
  )
}

Article.propTypes = {}

export default Article
