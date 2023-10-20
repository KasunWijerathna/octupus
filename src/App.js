import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [columnDefs, setColumnDefs] = useState([
    { headerName: 'School', field: 'school' },
    { headerName: 'Student', field: 'student' },
    { headerName: 'Subject', field: 'subject' },
    { headerName: 'Year Level', field: 'year_level_name' },
    { headerName: 'Sydney Participant', field: 'sydney_participant' },
    { headerName: 'Sydney Percentile', field: 'sydney_percentile' },
    { headerName: 'Assessment Area', field: 'assessment_area' },
    { headerName: 'Award', field: 'award' },
    { headerName: 'Class Name', field: 'class_name' },
    { headerName: 'Correct Answer Percentage Per Class', field: 'correct_answer_percentage_per_class' },
    { headerName: 'Correct Answer', field: 'correct_answer' },
    { headerName: 'Student Score', field: 'student_score' },
    { headerName: 'Category ID', field: 'category_id' },
  ]);
  const [rowData, setRowData] = useState([]);
  const [pageSize, setPageSize] = useState(100);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    fetch('http://127.0.0.1:8000/api/summaries/?page=' + page + '&page_size=' + pageSize)
      .then((response) => response.json())
      .then((data) => {
        setRowData(data?.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className="app-container">
      <h1>Summary Data</h1>
      <div className="ag-theme-alpine ag-grid-container">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
      <div className="pagination-container">
        <button
          className="page-button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button className="page-button" onClick={() => setPage(page + 1)}>
          Next Page
        </button>
      </div>
      <div className="page-number-container">
        <span>Current Page: {page}</span>
        </div>
    </div>
  );
};

export default App;