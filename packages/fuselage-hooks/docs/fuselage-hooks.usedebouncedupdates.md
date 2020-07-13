<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rocket.chat/fuselage-hooks](./fuselage-hooks.md) &gt; [useDebouncedUpdates](./fuselage-hooks.usedebouncedupdates.md)

## useDebouncedUpdates() function

Hook to debounce the state dispatcher function returned by hooks like `useState()` and `useReducer()`<!-- -->.

<b>Signature:</b>

```typescript
export declare function useDebouncedUpdates<S>([state, dispatch]: [S, DispatchWithoutAction], delay: number): [S, DispatchWithoutAction & {
    flush: () => void;
    cancel: () => void;
}];
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  \[state, dispatch\] | \[S, DispatchWithoutAction\] |  |
|  delay | number | the number of milliseconds to delay the dispatcher |

<b>Returns:</b>

\[S, DispatchWithoutAction &amp; { flush: () =&gt; void; cancel: () =&gt; void; }\]

a state value and debounced dispatcher pair
