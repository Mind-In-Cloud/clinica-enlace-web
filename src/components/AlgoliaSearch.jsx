import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight, Pagination, Configure, Snippet } from 'react-instantsearch';

import CustomStats from '@elements/CustomStats';

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
        <p class='k-subtitle whitespace-break-spaces text-neutral-500'>
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
        <SearchBox
          classNames={{
            root: 'border border-gray w-fit flex',
            form: 'bg-gray flex',
            input: 'focus:outline-none',
            submitIcon:'max-w-8 max-h-full',
            resetIcon: 'max-w-8 max-h-full'
          }}
          submitIconComponent={() => (
            <div className='max-w-8 max-h-full'>
              <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="50" rx="2" fill="#6588A6"/>
              <path d="M29.438 28.4654H28.3991L28.0309 28.1103C29.3196 26.6112 30.0955 24.665 30.0955 22.5477C30.0955 17.8268 26.2687 14 21.5477 14C16.8268 14 13 17.8268 13 22.5477C13 27.2687 16.8268 31.0955 21.5477 31.0955C23.665 31.0955 25.6112 30.3196 27.1103 29.0309L27.4654 29.3991V30.438L34.0406 37L36 35.0406L29.438 28.4654ZM21.5477 28.4654C18.2733 28.4654 15.6301 25.8222 15.6301 22.5477C15.6301 19.2733 18.2733 16.6301 21.5477 16.6301C24.8222 16.6301 27.4654 19.2733 27.4654 22.5477C27.4654 25.8222 24.8222 28.4654 21.5477 28.4654Z" fill="#C9EEF2"/>
              </svg>
            </div>
          )}
          resetIconComponent={() => (
            <div className='max-w-8 max-h-full'>
                x
             </div>
          )}
        />
        <CustomStats/>
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
