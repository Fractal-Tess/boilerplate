export type PBRecordModel = {
  id: string;
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
};

export type PBRecord<T, E = unknown> = T &
  PBRecordModel &
  (E extends Record<string, unknown>
    ? {
        expand: { [Key in keyof E]: E[Key] & PBRecordModel };
      }
    : unknown);
