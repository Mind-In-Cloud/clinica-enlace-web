import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight, Pagination, Configure, Snippet, Stats } from 'react-instantsearch';


const Search = ( ) => {

  const searchClient = algoliasearch('9KW8PLZJBF', '7bc5c32092e746550f3b477ae01ac009');

  function Hit({ hit }) {
    return (
      <article class='mb-4'>
        <a href={hit.url} aria-label={`Enlace a ${hit.title}`} >
          <h3 class='header-s text-blue font-medium'>
            <Highlight highlightedTagName='strong' attribute="title" hit={hit} />
          </h3>
          <hr class='border-0 h-0.5 bg-blue my-3' />
        </a>
        <p class='k-subtitle whitespace-break-spaces'>
          <Snippet highlightedTagName='strong' attribute="content" hit={hit} />
        </p>
      </article>
    );
  }

  return (
    <div class='k-section'>
      <InstantSearch
        searchClient={searchClient}
        indexName="netlify_ce080c16-9638-4482-ad69-938032b1629a_main_all"
        insights={true}
        future={{
          preserveSharedStateOnUnmount:true
        }}
      >
        <SearchBox/>
        <Hits hitComponent={Hit} />
        <Pagination
          classNames={{
            root: 'pt-4 text-blue',
            list: 'flex justify-center',
            item: 'px-2'
          }}
        />
        <Configure
          hitsPerPage={5}
          attributesToSnippet={[
            '*:20',
            'title:10',
          ]}
        />
      </InstantSearch>
    </div>
  )
}

export default Search;
