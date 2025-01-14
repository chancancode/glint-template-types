declare module 'ember-on-helper/helpers/on-document' {
    import Helper from '@ember/component/helper';

    import { OnArgs } from 'ember-on-helper/helpers/on';

    interface OnDocumentHelperSignature<K extends keyof DocumentEventMap> {
        Args: { Named: OnArgs; Positional: [eventName: K, handler: (event: DocumentEventMap[K]) => void] };
        Return: null;
    }

    export default class OnDocumentHelper<K extends keyof DocumentEventMap> extends Helper<
        OnDocumentHelperSignature<K>
    > {}
}
