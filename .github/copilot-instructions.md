# Copilot Instructions for React Quick Projects

## Project Architecture

This is a monorepo containing React Native projects. The main project is `rnrickmortyapp` - a Rick and Morty character browser using GraphQL.

### Key Stack Components
- **React Native 0.81.4** with TypeScript
- **Apollo Client** for GraphQL API calls to `https://rickandmortyapi.com/graphql`
- **Redux Toolkit** for state management (favorites only)
- **React Navigation** with nested stack/tab navigation pattern
- **i18next** for internationalization (English/Portuguese)

### Project Structure Pattern
```
packages/rnrickmortyapp/
├── client/apollo.ts          # GraphQL client setup
├── store/                    # Redux store with slices
├── navigation/index.tsx      # Nested navigation (Tab → Stack)
├── screens/                  # Screen components
├── components/               # Reusable UI components
└── i18n/                    # Translation files
```

## Development Workflows

### Running the App
- **Start Metro**: `npm start` (from package directory)
- **Android**: `npm run android` 
- **iOS**: First run `bundle install && bundle exec pod install`, then `npm run ios`

### State Management Pattern
- Use Redux Toolkit slices in `store/` directory
- Export typed hooks: `useAppDispatch` from `store/index.ts`
- Example: Favorites stored as `number[]` in `favoritesSlice.ts`

### Navigation Pattern
```tsx
// Nested navigation: BottomTab → NativeStack
<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeStackNavigator} />
</Tab.Navigator>
```

### GraphQL Patterns
- Use `gql` template literals for queries in screen components
- Apollo Client configured in `client/apollo.ts`
- GraphQL schema introspection via `graphql.config.yml`

### Component Patterns
- Functional components with TypeScript
- Props interfaces defined inline or as types
- Use `useTranslation()` for all user-facing strings
- Redux state access via typed selectors: `useSelector((state: any) => state.favorites.items)`

### Internationalization
- Translation keys follow dot notation: `"home.card.label.location"`
- Configure in `i18n.config.ts` with fallback to Portuguese
- Import at app root level

## Critical Files to Understand
- `App.tsx` - Provider setup order (Redux → Apollo → Navigation)
- `navigation/index.tsx` - Navigation hierarchy and param types
- `store/index.ts` - Redux store configuration and typed hooks
- `client/apollo.ts` - GraphQL client with Rick and Morty API

## Common Tasks
- **New screen**: Add to appropriate stack navigator in `navigation/index.tsx`
- **New Redux slice**: Export from `store/index.ts` reducer object
- **New GraphQL query**: Define with `gql` in screen component, use `useQuery` hook
- **New translation**: Add to both `i18n/en.json` and `i18n/pt.json`