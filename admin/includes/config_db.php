<?php
function getSchema()
{
    return [

        'gallery' => [
            'menuName' => 'gallery',
            'fields' => [
                'title' => [
                    'name' => 'Название',
                    'element' => 'input',
                    'type' => 'text',
                    'requery' => false,
                ],
                'img' => [
                    'name' => 'Картинки',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'video' => [
            'menuName' => 'Video',
            'fields' => [
                'title' => [
                    'name' => 'Название',
                    'element' => 'input',
                    'type' => 'text',
                    'requery' => false,
                ],
                'img' => [
                    'name' => 'Видео',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'comment' => [
            'menuName' => 'Отзывы',
            'fields' => [
                'title' => [
                    'name' => 'ФИО',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'text' => [
                    'name' => 'Текст отзыва',
                    'element' => 'textarea',
                    'type' => 'text',
                    'required' => true,
                ],
            ],
        ],

    ];
}
