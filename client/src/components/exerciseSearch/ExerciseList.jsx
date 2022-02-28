import ExerciseListItem from "./ExerciseListItem";
import * as React from "react";
import { useState } from "react";
import BackButton from "./BackButton";
import './Pagination.scss';

export default function ExerciseList(props) {
  const [current, setCurrent] = useState("");
  const { header, exercises } = props;

  //============pagination================
  const dataLimit = 5;
  const [pages] = useState(Math.round(exercises.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = pages < 5 ? pages : 5;
  //function to go to next page
  function goToNextPage() {
    //increment the current page by 1
    console.log("Next Page")
    setCurrentPage((page) => page + 1);

  }

  //function to go to the previous page
  function goToPreviousPage() {
    // decrement the page by 1
    setCurrentPage((page) => page - 1)
  }

  //this function change the page number to the page number clicked
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);

  }
  //to display the content for the selected page number
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return exercises.slice(startIndex, endIndex);
  }
  //this function display the pageLimit
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  }
  const showPage = (getPaginatedData().length < dataLimit) ? false : true;

  //==============pagination end==============

  const listOfExercises = getPaginatedData().map((exercise) => (
    <ExerciseListItem
      key={exercise.id}
      name={exercise.name}
      gifUrl={exercise.gifUrl}
      onClick={() => setCurrent(exercise.name)}
      show={current === exercise.name}
    />
  ));
  const showPageNumbers = getPaginationGroup().map((item, index) => (
    <button
      key={index}
      onClick={changePage}
      className={`paginationItem ${currentPage === item ? 'active' : null}`}
    >
      <span>{showPage && item}</span>
    </button>
  ));

  return (
    <div className='exerciseList'>
      <div className='heading-container'>
        <span>
          <BackButton />
        </span>
        <h2>
          {header}
        </h2>
      </div>
      <div className="item-container">
        {listOfExercises}
      </div>


      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          prev
        </button>

        {/* show page numbers */}
        {showPage && showPageNumbers}

        {/* next button */}
        <button 
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          next
        </button>
      </div>
    </div>
  );
}
