import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import '../assets/styles/Components/Text.scss'

const Text = ({type, tCol, tColSm, tColMd, tColLg, pCol, pColSm, pColMd, pColLg, height, cN, title1, title2, title3, bootstrap, paragraph, price}) => {
  return(
    <>
      <Container className={`p-0 ${tCol} ${tColSm} ${tColMd} ${tColLg} ${cN} ${bootstrap}`} style={{height: `${height}`, margin: 'auto'}}>
        {!type &&
          <>
            <p className={`col col-md-5 p-0 m-md-auto  ${cN}-title `} style={{fontSize: '1em'}}>
              {`${title1} `}
              {title2 &&
                <span>{title2}</span>
              }
            </p>
          </>
        }
        {type == 'left-align' &&
          <>
            <p className={`col col-md-10 p-0   ${cN}-title `} style={{fontSize: '1em'}}>
              {`${title1} `}
              {title2 &&
                <span>{title2}</span>
              }
            </p>
          </>
        }
        {type == 'qCards' &&
          <>
          <p className={`col p-0  ${cN}-title `} style={{fontSize: '1em'}}>
            {`${title1} `}
          </p>
        </>
        }
        {type == 'first-regular' &&
          <>
            <p className={`col p-0 ${cN}-title `} style={{fontSize: '1em'}}>
              {`${title1} `}
              <span>{title2}</span>
            </p>
          </>
        }
        {type == 'first-bold' &&
          <>
            <p className={`col p-0 ${cN}-title `} style={{fontSize: '1em'}}>
              <span>{title2}</span>
              <span className={`${cN}-title `}>{title1}</span>
            </p>
          </>
        }
        {type == 'double-bold' &&
          <>
            <p className={`col p-0 ${cN}-title `} style={{fontSize: '1em'}}>
            <span>{title2}</span>
            <span className={`${cN}-title`}>{title1}</span>
            <span>{title3}</span>
            </p>
          </>
        }
        {type == 'double-regular' &&
          <>
            <p className={`col p-0 ${cN}-title`} style={{fontSize: '1em'}}>
            <span className={`${cN} regular-text`}>{title1}</span>
            <span className={`${cN} purple-text`}><b>{title2}</b></span>
            <span className={`${cN} regular-text`}>{title3}</span>
            </p>
          </>
        }

        {type == 'pricing' &&
          <>
            <p className={`col p-0 ${cN}-title `} style={{fontSize: '1.5em', fontWeight: '500'}}>
              {`${title1} `}
            </p>
          </>
        }

        {cN == 'my-card' &&
          <hr className='col-1 spacer'/>
        }

        {cN == 'icon' &&
          <hr className='col-1 featureCardSpacer'/>
        }

        {type == 'qCards' &&
          <hr className='col-2 qCardSpacer'/>
        }

        {price &&
          <hr className='col-1 priceCardSpacer justify-content-center'/>
        }

        {paragraph &&
          <>
            <p className={`${pCol} ${pColSm} ${pColMd} ${pColLg} p-0 ${cN}-paragraph`} style={{fontSize: 'em'}}>{paragraph}</p>
          </>
        }

        {price &&
          <div className='row justify-content-center price-bill'>
            <h3 className=''>$</h3>
            <h1 className=' justify-content-center price'>
              {`${price}`}
            </h1>
            <h3 className=''>{title3}</h3>
          </div>
        }
      </Container>
    </>
  )
}

export default connect(null, null)(Text);
