

export interface Comic {
description: string,
images: Image[],
title: string,
_createdAt: string,
_id: string,
_rev: string,
_type: "comic",
_updatedAt: string
}

export interface Image {
  _key: string,
  _type: string,
  asset: {
    _ref: string,
    _type: string
  }
}

