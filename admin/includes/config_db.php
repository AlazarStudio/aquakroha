<?php
function getSchema()
{
    return [

        'gallery' => [
            'menuName' => 'Фото',
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
                    'selectOne' => true,
                ],
            ],
        ],

        'video' => [
            'menuName' => 'Видео',
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

        'feedback' => [
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
                'img' => [
                    'name' => 'Фото',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'faq' => [
            'menuName' => 'faq',
            'fields' => [
                'title' => [
                    'name' => 'Вопрос',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],
                'text' => [
                    'name' => 'Ответ',
                    'element' => 'textarea',
                    'type' => 'text',
                    'required' => true,
                ],
            ],
        ],

    ];
}
