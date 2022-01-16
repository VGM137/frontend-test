import React from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Text from './Text'
import Btn from './Btn'
import Tab from './Tab'
import '../assets/styles/Components/Api.scss'

const Api = (props) => {

  const jsIsActive = props.apiActiveBtn.js
  const cssIsActive = props.apiActiveBtn.css
  const securityIsActive = props.apiActiveBtn.security

  return (
    <Container className='m-0 api' style={{height: '100vh', width:'100vw'}}>
      <Text 
        cN={'my-card'}
        col={'col'} 
        pCol={'col-10'}
        pColMd={'col-md-7'}
        pColLg={'col-lg-5'}
        height={'20%'}
        title1='Easy to use API'
        paragraph='Guide to setup and configurations. You can present below a guide and a description of how your system configuration works and add some animated screens.'>
      </Text>
      <Tab section={'api'} />
      <div className='row justify-content-center'>
        <hr className='col-10'/>
      </div>
      <div>
        {jsIsActive &&
          <pre className='api-code'>
            <code className='code-area'>
            <span className='api-span purple'>{`$('.modal-togle').on('click', function(e){`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`e.preventDefault();`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`var modalopen = $(this).data("openpopup");`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`$('.modal--'+modalopen).toggleClass('modal-visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`var modaltype = $(this).data("popup");`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`$('.modal__content--'+modaltype).toggleClass('modal__content--visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;{`$('.modal__switch').on('click', function(e) {`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;&ensp;{`$('.modal__content').removeClass('modal__content--visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;&ensp;{`var modaltypeb = $(this).data("popup");`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;&ensp;{`$('.modal__content--'+modaltypeb).toggleClass('modal__content--visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;{`});`}</span>
            <br />
            <span className='api-span strong-blue'>{`});`}</span>
            </code>
          </pre>
        }
        {cssIsActive &&
          <pre className='api-code'>
            <code className='code-area'>
            <span className='api-span purple'>{`$('.modal-togle').on('click', function(e){`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`e.preventDefault();`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`var modalopen = $(this).data("openpopup");`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`$('.modal--'+modalopen).toggleClass('modal-visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`var modaltype = $(this).data("popup");`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`$('.modal__content--'+modaltype).toggleClass('modal__content--visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;{`$('.modal__switch').on('click', function(e) {`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;&ensp;{`$('.modal__content').removeClass('modal__content--visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;&ensp;{`var modaltypeb = $(this).data("popup");`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;&ensp;{`$('.modal__content--'+modaltypeb).toggleClass('modal__content--visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;{`});`}</span>
            <br />
            <span className='api-span strong-blue'>{`});`}</span>
            </code>
          </pre>
        }
        {securityIsActive &&
          <pre className='api-code'>
            <code className='code-area'>
            <span className='api-span purple'>{`$('.modal-togle').on('click', function(e){`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`e.preventDefault();`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`var modalopen = $(this).data("openpopup");`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`$('.modal--'+modalopen).toggleClass('modal-visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`var modaltype = $(this).data("popup");`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;{`$('.modal__content--'+modaltype).toggleClass('modal__content--visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;{`$('.modal__switch').on('click', function(e) {`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;&ensp;{`$('.modal__content').removeClass('modal__content--visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;&ensp;{`var modaltypeb = $(this).data("popup");`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;&ensp;{`$('.modal__content--'+modaltypeb).toggleClass('modal__content--visible');`}</span>
            <br />
            <span className='api-span strong-blue'>&ensp;&ensp;&ensp;&ensp;{`});`}</span>
            <br />
            <span className='api-span strong-blue'>{`});`}</span>
            </code>
          </pre>
        }
        <div className='h-10 api-btns justify-content-end'>
          <Btn cN={'col-3 m-3 blue-solid-btn'} name={'GET CODE'} />
          <Btn cN={'col-3 m-3 purple-solid-btn'} name={'RUN EXAMPLE'} />
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return{
    apiActiveBtn: state.apiActiveBtn
  }
}

export default connect(mapStateToProps, null)(Api)