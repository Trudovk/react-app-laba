import { useState, useEffect } from "react";
import { Pagination } from "../../components/pagination";
import { StaffList } from "../../components/staffList";
import "../../App.css";

function PolytechPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        let url = `/old/lk_api.php/?getStaff&search=&division=&page=${currentPage}&perpage=50&token=wAAfRph8SXWJgV6k2%2FIpq8Xa2CtxwAgPaIZ1fVoxfnnxMTZgPEFWacFk%2BbO2lmIVpB4FZl3gw4Gl4vqwmhv0ZgaojvUayVU3Lxqp%2BQY0sAl%2BCy%2FTfd1wwiwNp8clTY5zWg1F8j0pWnsSsst1UoyQUH0ntvyfx2iSMSSUNxzYFnE%3D`;
        let response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        setStaff(data.items);
        setTotalPages(parseInt(data.pages));
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) return "Loading...";
  if (error) return `An error occurred: ${error}`;
  if (!staff) return "Нет сотрудников";
  return (
    <main className="main">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onSwitch={handlePageChange}
      />
      <StaffList staff={staff} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onSwitch={handlePageChange}
      />
    </main>
  );
}

export default PolytechPagination;
