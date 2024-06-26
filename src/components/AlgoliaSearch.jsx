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
            root: 'border border-gray bg-metal w-fit flex',
            form: 'flex',
            input: 'focus:outline-none text-gray typo-body-m p-1 bg-white target-shadow',
            submitIcon:'max-w-8 max-h-full',
            resetIcon: 'my-2 mx-3 fill-cyan'
          }}
          submitIconComponent={() => (
            <div className=' aspect-square w-8 bg-metal flex justify-center'>
              <div className='max-w-4 max-h-full'>
                <svg width="100%" height="100%" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.438 14.4654H15.3991L15.0309 14.1103C16.3196 12.6112 17.0955 10.665 17.0955 8.54774C17.0955 3.82676 13.2687 0 8.54774 0C3.82676 0 0 3.82676 0 8.54774C0 13.2687 3.82676 17.0955 8.54774 17.0955C10.665 17.0955 12.6112 16.3196 14.1103 15.0309L14.4654 15.3991V16.438L21.0406 23L23 21.0406L16.438 14.4654ZM8.54774 14.4654C5.2733 14.4654 2.63007 11.8222 2.63007 8.54774C2.63007 5.2733 5.2733 2.63007 8.54774 2.63007C11.8222 2.63007 14.4654 5.2733 14.4654 8.54774C14.4654 11.8222 11.8222 14.4654 8.54774 14.4654Z" fill="#C9EEF2"/>
                </svg>
              </div>
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
