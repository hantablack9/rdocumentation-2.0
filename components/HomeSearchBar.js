import { SearchIcon } from '@datacamp/waffles-icons';

export default function HomeSearchBar() {
  return (
    <div className="relative mt-4 dark:text-dc-navy">
      <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
        <SearchIcon size={24} />
      </div>
      <input
        className="block w-full py-4 pl-16 text-2xl border-2 rounded-md placeholder-dc-grey400 border-dc-grey300 focus:border-dc-blue focus:ring-dc-blue dark:focus:border-dc-green dark:focus:ring-dc-green"
        type="text"
        placeholder="For example, try 'dplyr' or 'group_by'"
      />
    </div>
  );
}
