import React from 'react';

import { useDispatch } from 'react-redux';

import StyleForm from './styles/styleForm';
import PropTypes from "prop-types";

function EntryDetails(props) {
    const { entry } = props;
    const dispatch = useDispatch();
    
    return(
        <StyleForm>
          <div className='detail-content'>
            <h4 className='entry-title'>{entry.timePosted}</h4>
            <div className='rating'>
              <p className='rating-label'>your mood for the day:</p>
              <p>{entry.rating}</p>
              </div>
            <p className='blurb'>{entry.blurb}</p>
            <div className='entry-keywords'>{entry.keywords.map((keyword, index) => <Keyword key={index} keywordData={keyword} />)}</div>
          </div>
          <div className='detail-mod-links'>
            <hr />
            <button onClick={() => dispatch(toggleEditForm())}>Edit</button>
            <button onClick={() => props.onClickingDelete(entry)}>Delete</button>
          </div>
        </StyleForm>
      )
    }
    EntryDetails.propTypes = {
        entry: PropTypes.object,
        onClickingDelete: PropTypes.func
      }
      
      export default EntryDetails;
