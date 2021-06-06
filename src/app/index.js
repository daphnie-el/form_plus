import React, { useEffect, useMemo, useState } from 'react';
import {
  Grid,
  Card,
  Text,
  Box,
  Layout,
  MyLoader,
  Select,
  Button,
} from '../components';
import icon from '../assets/icon.svg';
import axios from 'axios';
import { usePaginated } from '@makotot/paginated';

const category = [
  {
    label: 'All',
    value: 'All',
  },
  {
    label: 'Education',
    value: 'Education',
  },
  {
    label: 'E-commerce',
    value: 'E-commerce',
  },
  {
    label: 'Health',
    value: 'Health',
  },
];

const dateCreated = [
  {
    label: 'Default',
    value: '',
  },
  {
    label: 'Ascending',
    value: 'Ascending',
  },
  {
    label: 'Descending',
    value: 'Descending',
  },
];

const alphabeticalOrder = [
  {
    label: 'Default',
    value: 'Default',
  },
  {
    label: 'Ascending',
    value: 'Ascending',
  },
  {
    label: 'Descending',
    value: 'Descending',
  },
];

let timeout;

const Templates = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [res, setResponse] = useState([]);
  const [templateData, setTemplateData] = useState([]);
  const [filterLabel, setFilterLabel] = useState('All');
  const [_currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchData, setSearchData] = useState(res);

  function getTotalPages(count) {
    return Math.ceil(count / 15);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const response = await axios.get(
          `https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`,
        );
        const { data } = response;
        setResponse(data);
        setTemplateData(data);
        setSearchData(data)
        setTotalPages(getTotalPages(data.length));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTemplates();
  }, []);

  const paginatedData = useMemo(
    () => templateData?.slice(_currentPage * 15 - 15, _currentPage * 15),
    [templateData, _currentPage],
  );

  function handleSearchTemplates(e) {
    const searchResult = searchData.filter((data) => {
      let searchInput = e.target.value;
      return data.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    setTemplateData(searchResult);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setCurrentPage(1);
      setIsLoading(false);
    }, 500);
  }

  //filter by Category
  function handleFilterByCategory(value) {
    setIsLoading(true);
    setFilterLabel(value);

    const filteredData = res.filter((data) => {
      return data.category.includes(value);
    });

    if (value === 'All') {
      setTemplateData(res);
      setSearchData(res)
    } else {
      setTemplateData(filteredData);
      setSearchData(filteredData)
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setTotalPages(getTotalPages(templateData?.length));
      setCurrentPage(1);
      setIsLoading(false);
    }, 500);
  }

  function filterAlphabetically(e) {
    //refactor to implement a faster sorthing algorithm
    let sortedData;

    setIsLoading(true);
    if (e.target.value === 'Default') {
      return templateData;
    }

    if (e.target.value === 'Ascending') {
      sortedData = templateData?.slice().sort((a, b) => {
        if (a.name < b.name) return -1;
        return a.name > b.name ? 1 : 0;
      });
    }
    if (e.target.value === 'Descending') {
      sortedData = templateData?.slice().sort((a, b) => {
        if (a.name > b.name) return -1;
        return a.name < b.name ? 1 : 0;
      });
    }
    setTemplateData(sortedData);
    setCurrentPage(10);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setCurrentPage(1);
      setIsLoading(false);
    }, 1500);
  }

  function filterByDate(e) {
    let sortedData;

    setIsLoading(true);
    if (e.target.value === 'Default') {
      return templateData;
    }

    if (e.target.value === 'Ascending') {
      sortedData = templateData?.slice().sort((a, b) => {
        if (new Date(a.created).valueOf() < new Date(a.created).valueOf())
          return -1;
        return new Date(a.created).valueOf() > new Date(a.created).valueOf()
          ? 1
          : 0;
      });
    }
    if (e.target.value === 'Descending') {
      sortedData = templateData?.slice().sort((a, b) => {
        if (new Date(a.created).valueOf() > new Date(a.created).valueOf())
          return -1;
        return new Date(a.created).valueOf() < new Date(a.created).valueOf()
          ? 1
          : 0;
      });
    }
    setTemplateData(sortedData);
    setCurrentPage(10);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setCurrentPage(1);
      setIsLoading(false);
    }, 1000);
  }

  //Pagination
  const { pages, currentPage, hasPrev, hasNext } = usePaginated({
    currentPage: _currentPage,
    // eslint-disable-next-line no-undef
    totalPage: 10,
  });

  function goToPrevPage() {
    if (currentPage !== 1) {
      // first page is 1
      setCurrentPage((c) => {
        return c - 1;
      });
    }
  }

  function goToNextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage((c) => {
        return c + 1;
      });
    }
  }

  return (
    <Layout>
      <Box
        className="header"
        display="grid"
        style={{ gridTemplateColumns: '55% 45%' }}
      >
        <input
          type="search"
          placeholder="Search Templates"
          onKeyUp={(e) => {
            setIsLoading(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              handleSearchTemplates(e);
            }, 500);
          }}
        />

        <Box
          className="select"
          display="flex"
          style={{ alignItems: 'center' }}
          justifyContent="space-between"
        >
          <Text margin>Sort By:</Text>
          <Select
            label="Category"
            options={category}
            onChange={(e) => handleFilterByCategory(e.target.value)}
            className="category"
          />
          <Select
            label="Order"
            options={alphabeticalOrder}
            onChange={(e) => filterAlphabetically(e)}
          />
          <Select
            label="Date"
            options={dateCreated}
            onChange={(e) => filterByDate(e)}
          />
        </Box>
      </Box>
      <Box pad="0.9375rem 0">
        <Box
          pad="0 0.625rem"
          bg="#FFF4EA"
          display="flex"
          justifyContent="center"
        >
          <img src={icon} alt="info-icon" />
          <Text align="center" margin="0 0 0 0.9375rem" pad="0.9375rem 0">
            Tada! Get started with a free template. Can’t find what you are
            looking for? Search from the 1000+ available templates
          </Text>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Text fontSize="1.125rem">{`${filterLabel} Templates`}</Text>
        <Text>{`${templateData?.length || 0} templates`}</Text>
      </Box>
      <Box>
        {isLoading ? (
          <Grid default="repeat(3, 1fr)" pad="1.875rem 0" gap="3.125rem">
            {[0, 1, 2].map((datum, index) => {
              return (
                <Card key={index}>
                  <MyLoader />
                </Card>
              );
            })}
          </Grid>
        ) : (
          <>
            {templateData.length ? (
              <Box>
                <Grid default="repeat(3, 1fr)" pad="1.875rem 0" gap="3.125rem">
                  {paginatedData &&
                    paginatedData.map((template, index) => {
                      return (
                        <Card key={index}>
                          <Text pad="0.625rem 1.25rem" fontSize="1.5rem">
                            {capitalizeFirstLetter(template?.name)}
                          </Text>
                          <Text pad="0 1.25rem">
                            {capitalizeFirstLetter(template?.description)}
                          </Text>
                          <Box bg="#F9F9F9" height="2.5rem">
                            <Text pad="0.625rem 1.25rem">
                              <a
                                href={template?.link}
                                rel="noreferrer noopener"
                                target="_blank"
                              >
                                Use Template
                              </a>
                            </Text>
                          </Box>
                        </Card>
                      );
                    })}
                </Grid>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  fontSize="1.125rem"
                >
                  <Button
                    clear
                    onClick={() => goToPrevPage()}
                    disabled={!hasPrev()}
                  >
                    Previous
                  </Button>
                  <Box>
                    <Text>
                      <span>{currentPage}</span>
                      <span>&nbsp; of {`${totalPages}`}</span>
                    </Text>
                  </Box>
                  <Button
                    clear
                    onClick={() => goToNextPage()}
                    disabled={!hasNext()}
                  >
                    Next
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box display="flex" justifyContent="center" margin="6rem 0 0 0">
                <Text fontSize="2rem" align="center">
                  No Results
                </Text>
              </Box>
            )}
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Templates;
